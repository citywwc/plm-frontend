import { Card, Steps } from 'antd';
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const { Step } = Steps;

const steps = () => {

  const currentStep = getCurrentStep();
  let stepComponent;

  if (currentStep === 1) {
    stepComponent = <Step2 />;
  } else if (currentStep === 2) {
    stepComponent = <Step3 />;
  } else {
    stepComponent = <Step1 />;
  }

  return (
    <PageHeaderWrapper content="Create a new part">
      <Card bordered={false}>
        <>
          <Steps current={currentStep} className={styles.steps}>
            <Step title="填写转账信息" />
            <Step title="确认转账信息" />
            <Step title="完成" />
          </Steps>
          {stepComponent}
        </>
      </Card>
    </PageHeaderWrapper>
  );
};

const getCurrentStep = () => {
  const { current } = this.props;

  switch (current) {
    case 'info':
      return 0;

    case 'confirm':
      return 1;

    case 'result':
      return 2;

    default:
      return 0;
  }
};


export default  steps;
