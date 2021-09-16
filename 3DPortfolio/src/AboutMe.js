import Typography from "@material-ui/core/Typography";
//contains text with inforatiom pertaining to me
const AboutMe = () => {
  return (
    <div className="AboutPage">
      <Typography classes={{ root: "AboutHeader" }} variant="h3" gutterBottom>
        A Little Introduction
      </Typography>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Background:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Hello, My name is Dmitriy. I'm a motivated technology enthusiast that is
        eager to become a software developer that graduated with a Bachelors of
        Science in Computer Information Systems. Professional experience
        includes providing software and hardware support, website management,
        Powershell automation, and SQL Report writing.
      </Typography>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Education:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        <ul>
          <li>
            <p> Bachcelors of Science in Computer Information Systems </p>
            <p> Deans List, 3.7 GPA</p>
          </li>
        </ul>
      </Typography>

      <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
        Experience:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        <ul>
          <li>
            <p> 2 years </p>
            <ol>
              <li>
                <p>
                  Expanding my portfolio mainly constanting of build web
                  appplications (React JS, .Net Core, SQL){" "}
                </p>
              </li>
              <li>
                <p>
                  PROFESSIONAL EXPERIENCE: SQL Report writing, Resolving
                  Application database related issues, Database maintaince, and
                  Powershell Automation{" "}
                </p>
              </li>
            </ol>
          </li>
        </ul>
      </Typography>
    </div>
  );
};
export default AboutMe;
