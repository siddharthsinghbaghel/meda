import React from 'react'


const Stats = [
    {count: "5K", label: "Active Searches"},
    {count: "3+", label: "ratings"},
    {count: "20000+", label: "viewers"},
];

const StatsComponent = () => {
  return (
    <section>
        <div>
            <div className='flex gap-x-5'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index}>
                                <h1>
                                    {data.count}
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
