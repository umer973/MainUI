export class User {
   public userId: number;
   public userName: any;
   public password: any;
   public userType: number;


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

