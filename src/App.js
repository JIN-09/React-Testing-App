
import './App.css';
import {Component} from "react";
import Customer from "./components/Customer";


const customers = [
    {
        'id': 1,
        'image':'http://placeimg.com/64/64/1',
        'name' : '이재원',
        'birthday' : '921222',
        'gender' : 'Male',
        'job' : 'student'

    },
    {
        'id': 2,
        'image':'http://placeimg.com/64/64/2',
        'name' : '유우키',
        'birthday' : '920417',
        'gender' : 'Female',
        'job' : 'student'

    },
    {'id': 3,
        'image':'http://placeimg.com/64/64/3',
        'name' : 'dk',
        'birthday' : '920317',
        'gender' : 'Female',
        'job' : 'student'

    },
]

class App extends Component {
    render(){
        return (
            <div>
                { customers.map(c => {
                    return (
                        <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                        />
                    );
                })

                }
            </div>
        );
    }
}

export default App;
