import React from 'react';
export default function About() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '94vh' }}>
      <div className="card bg-ternary" style={{ width: '25rem', height:'29rem'}}>
      <img src="https://futurelawyer.typepad.com/.a/6a00d8345170df69e2027880188948200d-800wi" alt="" />
        <div className="card-body d-flex flex-column align-items-center">
          <h3 className="card-title text-black" style={{color:'antiquewhite',fontWeight:'bold'}}>About</h3>
          <h5 className="card-text text-black" style={{textAlign:'justify',color:'antiquewhite',fontWeight:'normal'}}>
            Get started with my todo list which is a software application designed to help users organize and manage tasks,assignments and activities.
          </h5>
         
        </div>
      </div>
    </div>
  );
}
