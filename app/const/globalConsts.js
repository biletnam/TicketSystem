module.exports = {
    //�Ƿ���DEBUG��Ϣ
    OPEN_A_DEBUGLOG: true,                      //��־����A�Ƿ���

    OPEN_B_DEBUGLOG: true,                     //��־����B�Ƿ���

    OPEN_C_DEBUGLOG: true,                     //��־����C�Ƿ���

    TOKEN: {
        DEFAULT_SECRET: 'secre_test',
        DEFAULT_EXPIRE: 6 * 60 * 60 * 1000	// default session expire time: 6 hours
    },
    USRE_TYPE: {
        UT1: 1, //��Ҫ��֤�����
        UT2: 2	//ֻ��Ҫ�����û�����¼(�豸ID������¼)
    },

    GATE: {
        FA_NO_SERVER_AVAILABLE: 2001
    },

    OK: 200,
    FAIL: 500,

    //��������������֮�����Ϣ���Ͷ���
    S2SRPCMSGKIND: {
        KICKOUT_USER: 1                         //�����

    },
    LogServerName: {
        CreateUser: 'CreateUser'                //������ɫ
    },

    Adress:{
        IP:'123.57.28.15',
        PORT:80
    }
};
