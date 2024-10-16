export class Channel {
    public:string;
    name: string;
    idDB: string;
    description: string;
    members: {}[];

    constructor(obj?: any) {
        this.public=obj ? obj.public : 'yes';
        this.name = obj ? obj.name : '';
        this.idDB = obj ? obj.idDB : '';
        this.description = obj ? obj.description : '';
        this.members = obj ? obj.members : [];
    }

    toJSON() {
        return {
            "public":this.public,
            "name": this.name,
            "idDB": this.idDB,
            "description": this.description,
            "members": this.members
        }
    }
}