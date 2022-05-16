import React from 'react';
import chair from '../../assets/images/chair.png'
import chairBG from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const chairBg = {
    backgroundImage: `url(${chairBG})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
}

const css = `
    .my-today { 
        font-weight: bold;
        font-size: 140%;
    } 
    .my-selected:not([disabled]),
    .my-selected:focus:not([disabled]),
    .my-selected:active:not([disabled]),
    .my-selected:hover:not([disabled]) {
        color: white;
        background-color: #0FCFEC;
        border: 2px solid #0FCFEC;
    }
`;
const AppointmentBanner = ({ date, setDate }) => {


    return (
        <div style={chairBg} className="md:container px-5 mb-16 mx-auto hero md:min-h-screen">
            <div className="hero-content flex-col justify-around w-full lg:flex-row-reverse">
                <img src={chair} alt='' className='lg:max-w-[594px] rounded-lg shadow-2xl mb-16' />
                <div>
                    <style>{css}</style>
                    <DayPicker
                        styles={{
                            caption: { color: '#0FCFEC', borderColor: '#0FCFEC' },
                            head: { color: '#19D3AE' },
                            day_today: { color: 'red' }
                        }}
                        showOutsideDays
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today',
                        }}
                        className='shadow-2xl rounded-2xl'
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;