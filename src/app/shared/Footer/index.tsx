import React from 'react';
import Image from 'next/image';
import ERC_LOGO from "@/public/images/erc_logo.png";
import Link from 'next/link';
import LOSTMA_LOGO from "@/public/images/lostma_logo.png";
import ENC_LOGO from "@/public/images/enc_logo.png";
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zenodo } from '@/public/svgs';

function Tooltip({ message, children }: {message: string, children: React.ReactElement}) {
    return (
    <div className="group relative flex w-full justify-center">
        {children}
        <span className="absolute bottom-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
    </div>
    )
}

const Socials = () => {
    return (
        <>
        <h2 className="font-light md:font-semibold md:text-muted text-slate-900 mb-3 md:text-center">
            Community
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 gap-1">
            <Tooltip message='Zenodo'>
                <Link className='link w-fit' target="_blank" rel="noreferrer" href="https://zenodo.org/communities/lostma">
                    <div className="w-[18px]">{Zenodo}</div>
                </Link>
            </Tooltip>
            <Tooltip message='Bluesky'>
                <Link className='link w-fit' target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social">
                    <FontAwesomeIcon className='w-[18px]' icon={faBluesky} />
                </Link>
            </Tooltip>
            <Tooltip message='LinkedIn'>
                <div className='link w-fit h-full'>
                    <FontAwesomeIcon className='w-[18px]' icon={faLinkedin} />
                </div>
            </Tooltip>
            <Tooltip message='GitHub'>
                <Link className='link w-fit' target="_blank" rel="noreferrer" href="https://github.com/LostMa-ERC">
                    <FontAwesomeIcon className='w-[18px]' icon={faGithub} />
                </Link>
            </Tooltip>
        </div>
        </>
    )
}

const Pages = () => {
    return (
        <>
            <h2 className="font-light md:font-semibold md:text-muted text-slate-900 mb-3">
                Pages
            </h2>
            <div className="text-xs grid md:grid-cols-1 grid-cols-3 gap-y-1 gap-x-8">
                <div className='truncate'><Link className='link' href='/about'>About</Link></div>
                <div className='truncate'><Link className='link' href='/about#team'>Team</Link></div>
                <div className='truncate'><Link className='link' href='/corpus'>Corpus</Link></div>
                <div className='truncate'><Link className='link' href='/corpus/documentation'>Data Model</Link></div>
                <div className='truncate'><Link className='link' href='/publications'>Publications</Link></div>
                <div className='truncate'><Link className='link' href='/releases'>Releases</Link></div>
                <div className='truncate'><Link className='link' href='/about'>Events</Link></div>
            </div>
        </>
    )
}

const Legal = () => {
    return (
        <div className="">
            <h2 className="font-light md:font-semibold md:text-muted text-slate-900 mb-3">
                ERC Starting Grant
            </h2>
            <ul className="space-y-2 text-xs text-muted md:text-[var(--foreground)]">
                <li>
                    Horizon Europe ERC Grant number: <Link className='link' target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">101117408</Link>
                </li>
                <li>
                    Funded by the European Research Council. Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                </li>
            </ul>
        </div>
    )
}

const Partners = () => {
    return (
        <>
            <h2 className="font-light md:font-semibold md:text-muted text-slate-900 mb-3">
                Partners
            </h2>
            <div className='flex justify-center items-center'>
                        <Link target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">
                            <Image className='object-contain w-fit max-h-[100px]' src={ERC_LOGO} alt='ERC logo'/>
                        </Link>
                        <Link target="_blank" rel="noreferrer" href="https://www.chartes.psl.eu/">
                                <Image className='object-contain w-fit' src={ENC_LOGO} alt='ENC logo' />
                        </Link>
            </div>
        </>
    )
}

const Bottom = () => {
    return (
        <div className="flex px-6 mt-16 pt-10 gap-4">
            <Image className='flex-none w-fit h-[48px] object-contain'
                src={LOSTMA_LOGO} alt='LostMa logo' />
            <p className='grow my-0 text-[10px] font-normal md:text-[12px]'>
                &copy; 2025 LostMa-ERC | All rights reserved.<br/>
                Header image: <em>Romans aurthuriens</em>, Bibliothèque nationale de France, Français 95, folio 209v
            </p>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="pb-16 text-sm leading-6 md:px-6">
            <div className="overflow-hidden mx-auto divide-y divide-slate-200 dark:divide-slate-700">

                <div className='md:flex gap-4 justify-center grid'>

                    <div className='md:min-w-24 w-fit px-4 md:px-0 md:order-4'>
                        <Pages />
                    </div>

                    <div className='md:w-24 px-4 md:px-0 md:order-3'>
                        <Socials />
                    </div>

                    <div className='md:w-96 px-4 md:px-0 md:order-1'>
                        <Legal />
                    </div>

                    <div className='min-w-96 px-4 md:px-0 md:order-2'>
                        <Partners />
                    </div>
                </div>

                < Bottom />

            </div>
        </footer>
    )
}
