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
            <div className="grid md:grid-cols-[max-content_1fr] md:gap-12 gap-6">
                <div className="flex items-center justify-center">
                    <div className="grid md:grid-cols-3 gap-2 py-2">
                        <div>
                            <span>{RepeatableSVG}</span>
                            <label>Repeatable</label> 
                        </div>
                        <div>
                            <span>{LockSVG}</span>
                            <label>Required</label>
                        </div>
                        <div>
                            <span>{UnlockSVG}</span>
                            <label>Not required</label>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <ContributorPopup {...data} />
                </div>
            </div>
            {
                Object.values(data.sections).map((section, index) => 
                    <div className="container relative overflow-x" key={`section-${index}`}>
                        <table className="md:w-full min-w-fit overflow-scroll table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <caption className="caption-top text-muted">
                                {section.sectionName}
                            </caption>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    Object.values(section.fields).map((field, index) =>
                                        <tr key={`field-${field.dty_ID}-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-4"><IsRepeatable data={field.rst_MaxValues}/></td>
                                            <td scope="row" className="px-6 py-4"><IsRequired data={field.rst_RequirementType} /></td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                                    <Link href={`/corpus/documentation/vocabs/${field.trm_TreeID}`}>
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
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}