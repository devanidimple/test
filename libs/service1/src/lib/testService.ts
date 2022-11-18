export interface testInterface{
    name:string;
  }
  
  export class TestService{
    data: testInterface={name:''};
  
  setData(value:string){
  this.data.name=value;
  }
  getData(){
    return this.data;
  }
  
  }