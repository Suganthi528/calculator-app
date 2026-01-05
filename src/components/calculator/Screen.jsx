import React from 'react'
const Screen = React.forwardRef((props,ref) => (
    <section className="screen">
    <p ref={ref}>{props.Calc || "0"}</p>
    </section>

));
export default Screen;