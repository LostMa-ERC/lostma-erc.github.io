import { LockSVG, UnlockSVG, RepeatableSVG } from "@/public/svgs";

function IsRepeatable({data}: {data:number|null}) {
    if (data === 0 || !data) {
        return (<div className="size-6">{RepeatableSVG}</div>)
    }
    else {
        return (<></>)
    }
}

function IsRequired({data}: {data:string}) {
    if (data === "required") {
        return (<div className="size-6">{LockSVG}</div>)
    }
    else {
        return (<div className="size-6">{UnlockSVG}</div>)
    }
}

export { IsRepeatable, IsRequired }