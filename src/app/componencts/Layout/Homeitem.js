import MenuItem from "../menu/menuitem2";

export default function Homeitem(){
    return(
        <section className="marginTop: '10px'">
            <div className="text-center mb-4">
        <h3 className=" uppercase text-gray-600 font-semibold">
            Menu
            </h3>
        <h2 className=" text-primary font-bold text-4xl italic">
            
         example </h2>
           </div>
           <div className="grid grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
           
          
   
           </div> 

        
         </section>

    );
}