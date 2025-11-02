import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const Section = ({ children }: Props) => {
    return (
        <section className="max-w-7xl mx-auto p-4">
            {children}
        </section>
    )
}

export default Section