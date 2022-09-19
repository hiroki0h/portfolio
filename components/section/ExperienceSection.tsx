interface ExperienceData {
    date: string;
    period: string;
    company: string;
    position: string;
    desc: string;
    skill: [string];
}
interface ExperienceProps {
    data: ExperienceData[];
}
const ExperienceSection = ({ data }: ExperienceProps) => {
    return (
        <section className="inner">
            <h2 id="section1" className="boder">Experiences</h2>
            <div className="experiences">
                {data.map((list, i:number) => (
                    <div className="list" key={i}>
                        <ul className="left_area">
                            <li className="company">{list.company}</li>
                            <li className="date">{list.date}
                                <span className="box">{list.period}</span>
                            </li>
                            <li className="position">{list.position}</li>
                        </ul>
                        <ul className="right_area">
                            <p>Description</p>
                            <li className="desc">{list.desc}</li>
                            <li className="skill">
                                <p>Tech Stack</p>
                                {data[i].skill.map((skill, j:number) => (
                                    <span className="box" key={j}>{skill}</span>
                                ))}
                            </li></ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;

