import { EntityDetail } from "./models";
import Hashtag from "@/app/components/Hashtag";
import Link from "next/link";
import { LockSVG, UnlockSVG, RepeatableSVG } from "@/public/svgs";
import ConvertFieldType from "./FieldTypeConverter";
import Header from "./EntityProfileHeader";
import { IsRepeatable, IsRequired } from "./FieldIcons";
import { VocabURL } from "./VocabTerms";
import ContributorPopup from "./ContributorPopup";

export default function EntityProfile({data}: {data:EntityDetail}) {
    return (
        <div>
            {Header({data})}
            <div className="grid md:grid-cols-[max-content_1fr] mt-6 md:mt-4 md:gap-12 gap-6">
                <div className="flex items-center justify-center">
                    <div className="grid md:grid-cols-3 gap-2 py-2">
                        <div className="flex">
                            <div className="size-6">{RepeatableSVG}</div>
                            <label className="font-light tracking-tight">Repeatable</label>
                        </div>
                        <div className="flex">
                            <div className="size-6">{LockSVG}</div>
                            <label className="font-light tracking-tight">Required</label>
                        </div>
                        <div className="flex">
                            <div className="size-6">{UnlockSVG}</div>
                            <label className="font-light tracking-tight">Not required</label>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <ContributorPopup {...data} />
                </div>
            </div>

            <div className="relative overflow-scroll">
                <table className="md:w-full min-w-fit table-fixed text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-12"></th>
                            <th scope="col" className="px-6 py-3 w-12"></th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Equivalent Property</th>
                            <th scope="col" className="px-6 py-3">Controlled Vocabulary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(data.sections).map((section, index) =>
                                <>
                                <tr key={`section-${index}`}>
                                    <td colSpan={7} className="w-full left-0 bg-gray-100/50 p-2 -bottom-10 text-center">
                                        {section.sectionName}
                                    </td>
                                </tr>
                                    {
                                    Object.values(section.fields).map((field, index) =>
                                        <tr key={`field-${field.dty_ID}-${index}`} className="font-light bg-white dark:bg-gray-100/75 border-b">
                                            <td scope="row" className="px-6 py-4"><IsRepeatable data={field.rst_MaxValues}/></td>
                                            <td scope="row" className="px-6 py-4"><IsRequired data={field.rst_RequirementType} /></td>
                                            <th scope="row" className="px-6 py-4 text-gray-900">
                                                {field.rst_DisplayName}
                                            </th>
                                            <td className="px-6 py-4">
                                                {ConvertFieldType({field:field})}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="content" dangerouslySetInnerHTML={{__html: field.rst_DisplayHelpText}}/>
                                            </td>
                                            <td className="px-6 py-4 text-center overflow-x-scroll"><Hashtag url={field.dty_SemanticReferenceURL} /></td>
                                            <td className="px-6 py-4 space-y-1">
                                                <div className="uppercase text-xs text-center">
                                                    <Link className="link" href={`/corpus/documentation/vocabs/${field.trm_TreeID}`}>
                                                        {field.trm_Label}
                                                    </Link>
                                                </div>
                                                <ul className="list-disc">
                                                    {field.vocabTerms && (
                                                        Object.values(field.vocabTerms).map((obj, index) =>
                                                            <li key={`term-${obj.id}-${index}`}>
                                                                <VocabURL data={obj}/>
                                                            </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>

                                    )
                                }
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}