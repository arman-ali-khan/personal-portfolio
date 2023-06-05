import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const FAQ = () => {
    const [tabIndex,setTabIndex] = useState('')
    return (
        <div className='border rounded-md py-2 px-4'>
            <h1 className="text-xl font-gumela font-bold py-2">FAQ</h1>
          <div tabIndex={0} onFocus={()=>setTabIndex('0')} onBlur={()=>setTabIndex('')} className="collapse">
  <div className="collapse-title flex justify-between text-xl font-medium">
    <p>Who are you?</p> <span>{tabIndex!=='0'? <MdKeyboardArrowDown /> :<MdKeyboardArrowUp />}</span>
  </div>
  <div className="collapse-content">
    <p>This is Arman ALi Khan</p>
  </div>
</div>
          <div tabIndex={1} onFocus={()=>setTabIndex('1')} onBlur={()=>setTabIndex('')} className="collapse">
  <div className="collapse-title flex justify-between text-xl font-medium">
    <p>Who are you?</p> <span>{tabIndex!=='1'? <MdKeyboardArrowDown /> :<MdKeyboardArrowUp />}</span>
  </div>
  <div className="collapse-content">
    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
  </div>
</div>
          <div tabIndex={2} onFocus={()=>setTabIndex('2')} onBlur={()=>setTabIndex('')} className="collapse">
  <div className="collapse-title flex justify-between text-xl font-medium">
    <p>Who are you?</p> <span>{tabIndex!=='2'? <MdKeyboardArrowDown /> :<MdKeyboardArrowUp />}</span>
  </div>
  <div className="collapse-content">
    <p>tabIndex={2} attribute is necessary to make the div focusable</p>
  </div>
</div>
        </div>
    );
};

export default FAQ;