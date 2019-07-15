import React,{Component} from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Container, CardContent, Typography, CardMedia } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { async } from 'async';
class Home extends Component{
    constructor(props){
     super(props);
        this.state={
            userInfo:[{}],
            count:0,
            userPic:[],
            userName:[],
            login:[]
        }
    }

  async  componentWillMount(){
      try{
         setInterval(async()=>{
           
      const res= await fetch('https://randomuser.me/api/');
               const data =  await res.json();
               const dataUser = data.results;
               const dataUserName = data.results.name;
               const dataUserPic = data.results.picture;
               const dataLogin = data.results.login;
               this.setState({userInfo:dataUser,
                  userName:dataUserName,
                    count:(this.state.count)+1,
                      userPic:dataUserPic
            });
            sessionStorage.setItem("uuid",dataLogin.uuid);
            this.setState({count:this.state.count+1});
    },30000);}
    
    
    catch(e)
    {
        console.log(e);
    }
  }
    /*componentWillMount(){
        let result = null;
        let that = this;
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",function(){
            if(this.readyState===4){
                const data = JSON.parse(this.responseText).results;
                that.setState({userInfo:[...data]
             })
              console.log(that.state.userInfo);
              //console.log(that.state.userName);
            }
        
        });
        xhr.open('GET','https://randomuser.me/api/');
        xhr.send(result);
    }*/
   /* componentDidMount(){
     this.state.count<10
       {
         this.loadRandomUser();
        setInterval(this.loadRandomUser,30000);
       }
       
    } */
     /* async loadRandomUser(){
        try{
            
                const res= await fetch('https://randomuser.me/api/');
               const data =  await res.json();
               const dataUser = data.results;
               const dataUserName = data.results.name;
               const dataUserPic = data.results.picture;
               const dataLogin = data.results.login;
               this.setState({userInfo:dataUser});
                  /*userName:dataUserName,
                    count:(this.state.count)+1,
                      userPic:dataUserPic
            });
            sessionStorage.setItem("uuid",dataLogin.uuid);
            this.setState({count:this.state.count+1});
        }
            
     
     catch(e){
         console.log(e);
     }
    }*/
    
    render(){
        return(
        <div>
        <Container>
                    <Card props={this.componentDidCatch.params.id}>
                    <CardHeader avatar={
                                  <Avatar src={this.state.userPic.medium}/>
                              } title={this.state.userName.first}/>
                              <CardContent><Typography variant="h6">{"No. Of Users generated"+
                              this.state.count}</Typography></CardContent>
                        </Card>
        </Container>
        </div>);
    }

}

export default Home;