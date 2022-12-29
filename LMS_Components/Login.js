import React, { Component } from "react";

export default class Login extends Component {
    constructor()
{
    super();
    this.state={
        emp_email:"",
        password:""
    }
    this.Login=this.Login.bind(this);
    this.validate=this.validate.bind(this);
    this.handleChange=this.handleChange.bind(this);
    //this.submit=this.submit.bind(this)

}

validate()
{
    if(this.state.emp_email=="" &&  this.state.password=="")
    {
        alert("Please Enter Your Credentials")
    }
    else{
        return true;
    }

}
handleChange(e){
    this.setState(e);
}

Login(e)
{
    e.preventDefault();
    if (this.validate())
    {
        let emp_email = this.state.emp_email;
        let password = this.state.password;
        fetch("http://localhost:12246/api/CRUD/EmpLogin/"+emp_email+"/"+password).then(res =>res.json()).then(result =>
            {
                console.log(result);
                if(result==1)
                {
                    //alert(result);
                    window.location="/Dashboard";
                }
                else
                {
                    alert ("Invalid Credentials");
                }
            }).catch(err =>{
                console.warn(err);
                alert("error");
            })
    }
}
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Employee Email</label>
                    <input type="text" className="form-control" onChange={(e)=>this.handleChange({emp_email:e.target.value})} placeholder="Enter Emp Email" />
                </div>

            

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{this.handleChange({password:e.target.value})}} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.Login}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}