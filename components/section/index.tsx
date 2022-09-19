import IntroduceSection from './IntroduceSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import data from '../../public/portfolio-text.json';

const Section = () => {
    return (
        <div id="container">
            <IntroduceSection data={data.introduce}/>
            <ExperienceSection data={data.experience}/>
            <ProjectSection data={data.project}/>
        </div>
    );
};


export default Section;