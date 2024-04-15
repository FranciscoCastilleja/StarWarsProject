export default function Message({avatar, name, date, message}:{avatar:string, name:string, date:string, message:String}) {
    return (
        <article className="my-2 w-[90%] h-auto border-y border-white/80">
            <img src={avatar} alt={`Picture of the user ${name}`} className="my-2 size-10 rounded-full"/>
            <h1 className="my-2 text-white text-lg font-bold">{name} <span className="ml-3 text-white/50 text-sm font-normal">{date}</span></h1>
            <p className="my-2 text-white text-base">{message}</p>
        </article>
    );
}