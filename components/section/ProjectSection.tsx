import Link from 'next/link';

interface ProjectData {
    name: string;
    date: string;
    desc: string[];
    member: string;
    result: string;
    stack: string[];
}
interface ProjectProps {
    data: ProjectData[];
}
const ProjectSection = ({ data }: ProjectProps) => {
    return (
        <section className="inner">
            <h2 id="section2" className="boder">Project</h2>
            <div className="project">
                {data.map((list, i:number) => (
                    <div className="list" key={i}>
                        <ul className="left_area">
                            <li className="date">{list.date}</li>
                        </ul>
                        <ul className="right_area">
                            <li className="name">
                                <h3 className="result">
                                    {
                                        list.result.length > 1
                                            ?   <Link href={list.result}>
                                                    <a>🔗{list.name}</a>
                                                </Link>
                                            :   <>{list.name}</>
                                    }
                                </h3>
                            </li>
                            <li>
                                {
                                    list.member.length > 1 && <>{list.member}</>
                                }
                            </li>
                            <li>
                                {data[i].desc.map((desc, j:number) => (
                                    <p className="desc" key={j}>{desc}</p>
                                ))}
                            </li>
                            <li className="stack">
                                {data[i].stack.map((stack, j:number) => (
                                    <span className="box" key={j}>{stack}</span>
                                ))}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;