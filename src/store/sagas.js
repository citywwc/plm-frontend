import { put, takeEvery, call } from 'redux-saga/effects';
import { actions as login} from '../components/login';
import { LOGIN, AUTH_REQUEST_FAILED } from './actionTypes';
import { instance } from '../utils/instance'



function fetchAuthApi() {
  const data = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<ns7:LoginInput sessionDiscriminator="913452a1aaa6f370:388353e7:16b78d6ff38:-7fff" locale="zh_CN" role="" group="" password="infodba" username="infodba" xmlns:ns6="http://teamcenter.com/Schemas/Core/2008-03/Session" xmlns:ns2="http://teamcenter.com/Schemas/Soa/2006-03/Base" xmlns:ns5="http://teamcenter.com/Schemas/Core/2007-12/Session" xmlns="http://teamcenter.com/Schemas/Core/2006-03/Session" xmlns:ns8="http://teamcenter.com/Schemas/Core/2009-04/Session" xmlns:ns3="http://teamcenter.com/Schemas/Core/2007-01/Session" xmlns:ns7="http://teamcenter.com/Schemas/Core/2008-06/Session" xmlns:ns4="http://teamcenter.com/Schemas/Core/2007-06/Session" xmlns:ns10="http://teamcenter.com/Schemas/Core/2012-02/Session" xmlns:ns9="http://teamcenter.com/Schemas/Core/2010-04/Session"/>';

  return instance.post('/tc/RestServices/Core-2008-06-Session/login', data)
    .then((response) => ({response}))
    .catch(error => ({ error }))
}


function* auth() {
  const { response, error } = yield call(fetchAuthApi);
  if (response)
    yield put({type: LOGIN});
  else
    yield put({ type: AUTH_REQUEST_FAILED, error})
}

//generator function
function* loginSagas() {
  yield takeEvery(LOGIN, auth);
}

export default loginSagas;
