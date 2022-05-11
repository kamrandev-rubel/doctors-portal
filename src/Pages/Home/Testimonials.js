import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            city: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Puja Cerry',
            city: 'Washington',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'John Aliba',
            city: 'New York',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <section className='sm:px-14 px-6 mb-32'>
            <div>
                <div className='flex justify-between items-center mb-16 md:mb-36'>
                    <div>
                        <h3 className='text-primary font-bold text-xl mb-3'>Testimonials</h3>
                        <p className='text-secondery text-4xl'>What Our Patients Says</p>
                    </div>
                    <div>
                        <img src={quote} className='w-24 md:w-48' alt="" />
                    </div>
                </div>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        reviews.map(review => {
                            const { name, img, city, description } = review;
                            return (
                                <div className="card bg-base-100 drop-shadow-xl">
                                    <div className="card-body">
                                        <p>{description}</p>
                                    </div>
                                    <figure className='flex mr-auto p-7 pt-0'>
                                        <img src={img} className='w-16 h-16 border-2 border-primary rounded-full mr-3' alt="review" />
                                        <div>
                                            <h3 className='card-title'>{name}</h3>
                                            <h4>{city}</h4>
                                        </div>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;