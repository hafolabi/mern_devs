import React from 'react'
import { Link } from 'react-router-dom'
import Row from './tableRows'
import Apitable from './apitable'
import Navbar from './Navbar'
import Footer from './Footer'




class Apii extends React.Component {
    
    state = {
        loading: false,
        character: [],
        char: [],
        fivechar:[],

        emps: [
            {
                id: 101,
                name: 'John',
                agent: 'Mike',
                location: 'Edo',
                salary: 6000
            },

            {
                id: 102,
                name: 'Lukas',
                agent: 'Chris',
                location: 'Delta',
                salary: 7500
            },

            {
                id: 103,
                name: 'Demi',
                agent: 'Shade',
                location: 'Lagos',
                salary: 4000
            },

            {
                id: 104,
                name: 'Dami',
                agent: 'Bayo',
                location: 'Ado',
                salary: 2500
            },
        ]
    }


    
    componentDidMount() {
        this.allCharacter()
        this.firstFiveChar()
        this.singCharacter()

    }
    /*fetching from all the ID in an API array and insert each variable(character) to desire section
    of the website interface*/

    allCharacter(){
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data =>{                                
                this.setState({loading: false, char:data.results})
             
            })
                

    }
    /*fetching first five content in an API array and insert each variable(character) to desire section
    of the website interface*/

    firstFiveChar(){
        this.setState({ loading: true })
        fetch("https://api.randomuser.me/?results=5")
            .then(response => response.json())
            .then(data =>{                                
                this.setState({loading: false, fivechar:data.results})
             
            })
                

    }
    /*fetching from just one ID in an API array and insert each variable(character) to desire section
    of the website interface*/
    singCharacter()
    {
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data =>{
                this.setState({ loading: false, character: data.results[2] })
            })
    }

    delEmp = (id, e) => {
        const copyemps = [...this.state.emps]
        copyemps.splice(id, 1)
        this.setState({ emps: copyemps })


    }

    delApi = (index, e) => {
        const copyapi = Object.assign([], this.state.char)
        copyapi.splice(index, 1)
        this.setState({ char: copyapi })
    }


    render() {
        const name = this.state.loading ? 'loading...' : this.state.character.name
        const height = this.state.loading ? 'loading...' : this.state.character.height
        const mass = this.state.loading ? 'loading...' : this.state.character.mass
        const hair_color = this.state.loading ? 'loading...' : this.state.character.hair_color
        const skin_color = this.state.loading ? 'loading...' : this.state.character.skin_color

        //Second Api Call (aLL the content of an api)

        /*const nam = this.state.loading ? 'loading...' : details.name
        const heigh = this.state.loading ? 'loading...' : this.state.details.height
        const mas = this.state.loading ? 'loading...' : this.state.details.mass
        const hair_colo = this.state.loading ? 'loading...' : this.state.details.hair_color
        const skin_colo = this.state.loading ? 'loading...' : this.state.details.skin_color*/

        
        return (
            <div>
                <Navbar />
                <section className="breadcrumbs">
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
                                <h1 style={{ textAlign: 'center' }}>Contents from free API (Submitted Users Details)</h1>

                            </div>

                        </div>
                    </div>


                    <div class="row mt-5 contact justify-content-center" data-aos="fade-up">

                        <div class="col-lg-12 ">
                            <h5 style={{ textAlign: "center" }}> From Global API</h5>
                            <table style={{ width: '100%', color: '#000' }}>
                                <tbody>
                                    {   
                                        <Apitable name={name} height={height} mass={mass}  hair_color={hair_color} skin_color={skin_color} />
                                        
                                    }
                                </tbody>

                            </table>

                                    <br />
                            <table style={{ width: '100%', color: '#000' }}>
                                <tbody>
                                    {   
                                        this.state.loading ? 'loading...':
                                        this.state.fivechar.map(details=> ( 
                                        <Apitable name={details.email} height={details.country}
                                        
                                        />))
                                        
                                    }
                                </tbody>

                            </table>

                                        <br />

                            <table style={{ width: '100%', color: '#000' }}>
                                <tbody  style={{ textAlign: "center" }}  >
                                    {   
                                            this.state.loading ? 'loading...':
                                        this.state.char.map(details=> ( <Apitable name={ details.name} key={details.name} height={details.height}
                                         mass={details.mass} hair_color={details.hair_color} skin_color={details.skin_color}  deleteEvent={this.delApi.bind(this.index)}/>))
                                       
                                    }
                                </tbody>

                            </table>

                        </div>
                    </div>


                    <div class="row mt-5 contact justify-content-center" data-aos="fade-up">

                        <div align="center" class="col-lg-6 ">
                            <h5 style={{ textAlign: "center" }} >From Local API</h5>
                            <table style={{ width: '100%', color: '#000', }}>
                                <tbody>
                                    {
                                        
                                        this.state.emps.map(emp =>
                                            <Row salary={emp.salary} agent={emp.agent}
                                                name={emp.name} key={emp.id} location={emp.location} deleteEvent={this.delEmp.bind(this.id)} />)
                                    }

                                </tbody>

                            </table>

                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        )
    }
}

export default Apii;