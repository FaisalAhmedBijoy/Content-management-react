
const users = [
    {

        name: "Faisal",
        age: 22,
        phones: [
            {

                home: '01623213123',
                office: '254214454'
            }
        ]
    },
    {

        name: "Ahmed",
        age: 25,
        phones: [
            {

                home: '01654161213123',
                office: '254214241212454'
            }
        ]
    }


]

function NestedList() {
    return (
        <div>
            <h1>Nested Lists</h1>
            <h2>UserName: {users[0].name}</h2>

            {users.map((user, index) => (
                <div key={index} >
                    <h3> Name: {user.name}</h3>
                    <h2> Age: {user.age}</h2>

                    {user.phones.map((phone, index) => (
                        <div key={index}>
                            <p> Phone - Home: {phone.home} </p>
                            <p> Phone - Work: {phone.office} </p>
                        </div>
                    ))}

                </div>
            ))}

        </div>
    )
}
export default NestedList;