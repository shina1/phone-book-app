import React from 'react'

const Course = ({course}) => {
    const [first, second] = course
    const {name, parts} = first
    console.log(second.name);
    let totArr = []
    let copy = [...parts]
    let secondCopy = [...second.parts]
    copy.forEach(part => {
        totArr.push(part.exercises)
    });
    const total = totArr.reduce((a,b) => a + b, 0)
    return (
        <div>
            <section>
                <h2>{name}</h2>
                <div>
                    {
                        copy.map((part) =>{
                        return <p key={part.id}>{part.name} <span>{part.exercises}</span></p>
                        })
                    }
                </div>
                <div>
                    {
                        <h3>Total of {total} exercise</h3>
                    }
                </div>
            </section>
            <section>
                <h2>{second.name}</h2>
                <div>
                    {
                        secondCopy.map((part)=> {
                            return <p key={part.id}>
                                {part.name}
                                <span>
                                    {
                                        part.exercises
                                    }
                                </span>
                            </p>
                        })
                    }
                </div>
                <div>
                    {
                        <h3>Total of {total} exercise</h3>
                    }
                </div>
            </section>
        </div>
    )
}

export default Course
