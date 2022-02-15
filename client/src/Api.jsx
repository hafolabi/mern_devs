import React from 'react'
import { Link } from 'react-router-dom'
import slide3 from './banner/slide3.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

class Api extends React.Component{
                constructor(){
                    super()
                    this.state={
                        topText:'',
                        bottomText:'',
                        randomImg: slide3,
                        allMemeImgs:[]
                    }
                    this.handleChange=this.handleChange.bind(this)
                    this.handleSubmit=this.handleSubmit.bind(this)
                }
               
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response=>response.json())
            .then(response=>{
                const{memes}=response.data
                this.setState({allMemeImgs:memes})
            })
             
    }

    handleChange(event){
        const {name, value} = event.target    
        this.setState({
            [name]:value
        })
        
    }

    handleSubmit(event){
        event.preventDefault();
        const  randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMemeImg})

    }

    render(){
        return(
            <div>
                <Navbar />
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Api Call</h2>
                            <ol>
                                <li><Link to='/'>Home</Link></li>
                                <li>Api Call</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section class="apiCall" >
                    <div class="container">
                        <div class="row justify-content-center" data-aos="fade-up">

                            <div class="col-lg-10 info-wrap">
                                <h1 style={{textAlign:'center'}}>Contents from free API(Random Meme Gen.)</h1>

                            </div>

                        </div>

                        <div class="row contact justify-content-center mt-5" data-aos="fade-up">

                            <div class="col-lg-10 ">
                                <form method="" action="" onSubmit={this.handleSubmit}>
                            <div className='row' >
                                    <div class="col-md-5 form-group">
                                    <input type="text" className="form-control" name="topText" onChange={this.handleChange} value={this.state.topText} placeholder="Input Top Text"  />
                                    </div>

                                    <div class="col-md-5 form-group">
                                    <input type="text" className="form-control" name="bottomText" onChange={this.handleChange} value={this.state.bottomText} placeholder="Input Top Text"  />
                                    </div>

                                    <div class="col-md-2 form-group "><button class="btn btn-outline-success">Request</button></div>

                             </div>
                                </form>

                            </div>
                            
                            <div class="col-lg-10 mt-5 meme" >
                                        <img src={this.state.randomImg} alt="" />
                                   <h2 className="top">{this.state.topText}</h2>
                                   <h2 className="bottom">{this.state.bottomText}</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

}

export default Api;