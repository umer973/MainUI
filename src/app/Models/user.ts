export class User {
    userId: number;
    userName: any;
    password: any;
    userType: number;


    public getModal() {
        var loadmodal = {
            "Mode": 0,
            "CurdType": "",
            "SaveData": {
                "tbladdproduct": []
            }
        }
        return loadmodal;
    }

}

