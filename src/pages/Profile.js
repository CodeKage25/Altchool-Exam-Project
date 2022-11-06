import useFetch from "../components/useFetch";
import '../assets/profile.css';
import ReactMarkdown from 'react-markdown'

export const MarkdownToHtml = () => {
    return(
      <ReactMarkdown>I'm a Software Engineer, Technical Writer, and a Data Scientist. I'm passionate about sharing knowledge, documentation, web engineering, and others. I create technical content (on my [Blog](https://code-kage.hashnode.dev/)).

      **Here's a quick summary about me**:
      
      - 😊 Pronouns: He/him
      - 💡 Fun fact: I'm currently studying at AltSchool Africa [School of Software Engineering](https://altschoolafrica.com/schools/engineering) Class of 2022.
      - 🌱 I work with JavaScript, Reactjs, Nextjs and Typescript.
      - 😊 I’m looking for help with open source projects, hackathons, internships, and job opportunities.
      - 💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior/Mid level).
      - 📫 You can [view my resume](#) and contact me by emailing: babzchizzy27@gmail.com.</ReactMarkdown>
    )
  }

function Profile() {
    const url = "https://api.github.com/users/codekage25"
    const { loading, data } = useFetch(url)
    return (
        <div className="profile">
            <h1 className="heading">Personal details</h1>

            {/* Image and Names */}
            <div className="details-holder extra">
                <img className="user-img" src={data.avatar_url} alt="Github Dp" />

                {/* Names */}
                <div>
                    <p className="extra-head">{data.name}</p>

                    {/* Following */}
                    <div className="followers">
                        <p>{data.followers} Followers</p>
                        <p>{data.following} Following</p>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <h1 className="heading">Bio</h1>
            <div className="details-holder">
                <p>{data.bio}</p>
                
                
                    <MarkdownToHtml />
                
            </div>
        </div>
    )
}

export default Profile;