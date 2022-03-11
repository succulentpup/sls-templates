process.env.AWS_REGION =  process.env.AWS_REGION ?? 'eu-west-2';

const {
    DOMAIN = 'serverlesshub',
    ROOT_DOMAIN = 'com',
} = process.env;

export default () => { // tslint:disable-line:no-default-export
    process.env.DOMAIN = DOMAIN;
    process.env.ROOT_DOMAIN = ROOT_DOMAIN;
};