const IntroduceSection = ({ data }: any) => {
    return (
        <section className="inner">
            <h2 id="section0" className="boder">Introduce</h2>
            <div className="text">
                <p dangerouslySetInnerHTML={{ __html: data }}  />
            </div>
        </section>
    );
};


export default IntroduceSection;