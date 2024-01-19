export interface IPeopleResult  {
    gender: string;
    name:{
       title: string;
       first:string;
       last:string;
    },
    location:{
       street:{
          number: number,
          name:string,
       },
       city:string,
       state:string,
       country:string,
    postcode: number,
       coordinates:{
          latitude:string,
          longitude:string
       },
       timezone:{
          offset:string,
          description: string
       }
    },
    email:string,
    login:{
       uuid:string,
       username:string,
       password:string,
       salt:string,
       md5:string,
       sha1:string,
       sha256:string
    },
    dob:{
       "date":"1961-06-26T23:11:54.223Z",
       "age":62
    },
registered:{
       "date":"2005-11-13T23:41:33.799Z",
       "age":18
    },
    phone:"(436) 702-8647",
    cell:"(994) 732-9783",
    id:{
       name:"SSN",
       value:"557-12-7865"
    },
    picture:{
       large:string,
       medium:string,
        thumbnail:string
    },
    nat:string
}


export interface IPeopleInfo {
    seed: "f9ef9887442fbf49",
    results: 1,
    page: 1,
    version: "1.4"
}

export type PeopleResponseType = {
    result: IPeopleResult[],
    info: IPeopleInfo,
}