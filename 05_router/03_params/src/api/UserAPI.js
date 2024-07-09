import {useState, useEffect } from "react"

function User() {
    
    const [user, setuser] = useState('')
    
    useEffect(() => {
      axios.get('https://randomuser.me/api/')
        .then(res => {
            setuser(res.data.results[0]);
        })
        .catch(err => {
            console.log('err',err)
        })
    }, [])
    console.log('user',user);

    if(!user){
        return <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif'/>
    }

    return (
        <>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '300px', margin: '0 auto', textAlign: 'center' }}>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={{ borderRadius: '50%' }} />
            <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <p><strong>ID:</strong> {user.login.username}</p>
            <p><strong>PASSWORD:</strong> {user.login.password}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Cell:</strong> {user.cell}</p>
            <p><strong>Address:</strong> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
            <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
            <p><strong>Age:</strong> {user.dob.age}</p>
            <p><strong>Registered:</strong> {new Date(user.registered.date).toLocaleDateString()}</p>
            <p><strong>Nationality:</strong> {user.nat}</p>
        </div>
        </>
    )
}

export default User
