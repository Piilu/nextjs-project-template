import React from 'react'

type UniversalErrorProps = {
    code: number,
}
export default function UniversalError(props: UniversalErrorProps)
{
    const { code } = props;
    const text = {
        500: "Serveri poolne viga. Tegeleme.",
        401: "Juurdepääs puudub",
        403: "Juurdepääs puudub",
        404: "Ei leitud"
    }
    return (
        <div className={'flex h-32 items-center justify-center'}>
            <div className='flex flex-col items-center gap-3'>
                <h2 className='text-5xl text-destructive'>{code}</h2>
                <p>{text[code as 500 | 401 | 403 | 404]}</p>
            </div>
        </div>
    )
}
