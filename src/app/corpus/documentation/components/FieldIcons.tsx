import { LockSVG, UnlockSVG, RepeatableSVG } from "@/public/svgs";

function IsRepeatable({data}: {data:number|null}) {
    if (data === 0 || !data) {
        return (<>{RepeatableSVG}</>)
    }
    else {
        return (<></>)
    }
}

function IsRequired({data}: {data:string}) {
    if (data === "required") {
        return (<>{LockSVG}</>)
    }
    else {
        return (<>{UnlockSVG}</>)
    }
}

export { IsRepeatable, IsRequired }