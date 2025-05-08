import React from "react";
import Item from "../items/Item";

function SuggestionView() {
    return (
        <div className='w-1230 h-auto bg-suggestion bg-no-repeat bg-cover bg-center rounded-md mt-5'>
            <div className='h-20 w-full'></div>
            <div className='grid grid-cols-5 ml-5'>
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <Item key={i} />
                    ))
                }
            </div>
        </div>
    );
}

export default SuggestionView;