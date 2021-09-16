import Fade from "react-reveal/Fade";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import Typography from "@material-ui/core/Typography";
//just some text you see when the website first loads
const IntroText = () => {
  return (
    <Fade>
      <div className="introduction-section">
        <div className="intro-cont">
          <GlitchClip duration={3000}>
            <Typography display="block" variant="h2">
              Dmitriy Komerzan
            </Typography>
          </GlitchClip>
          <GlitchClip duration={3500}>
            <Typography display="block" variant="h5" gutterBottom>
              Aspiring Full Stack Software Developer
            </Typography>
          </GlitchClip>
          <GlitchClip duration={2500}>
            <Typography variant="body2" gutterBottom>
              "They don't make bugs like Bunny anymore" -Anonymous
            </Typography>
          </GlitchClip>
          <GlitchClip duration={2800}>
            <Typography variant="body1" gutterBottom>
              Based in Massachetts
            </Typography>
          </GlitchClip>
        </div>
      </div>
    </Fade>
  );
};

export default IntroText;
