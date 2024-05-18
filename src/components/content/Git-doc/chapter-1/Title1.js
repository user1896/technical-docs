import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../main/MainExports";
import img1 from "../images/ch1-img1.png";

export default function Title1({toggleNavbar}){
	return (
		<Main toggleNavbar={toggleNavbar} >
			<H2>1. Version control</H2>
			<P>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
				<br />
				There are two types of VCs:
				<UList>
					<li>Centralized Version Control System (CVCS)</li>
					<li>Distributed Version Control System(DVCS)</li>
				</UList>
			</P>
			<H3>1.1. Centralized VCS</H3>
			<P>
				Centralized version control system uses a central server to store all files and enables team 
				collaboration.
				<strong>It works on a single repository</strong> to which users can directly access a central server.
			</P>
			<Img src={img1} alt="Version control" />
			<P>
				The repository in the above diagram indicates a central server that could be local or remote which is
				directly connected to each of the programmer’s workstation.
			</P>
			<P>
				Every programmer can extract or update their workstations with the data present in the repository or
				can make changes to the data or commit in the repository. Every operation is performed directly on
				the repository.
			</P>
			<P>
				This method has some major drawbacks. Some of them are:
				<UList>
					<li>
						It is not locally available; meaning you always need to be connected to a network to perform any
						action.
					</li>
					<li>
						Since everything is centralized, in any case of the central server getting crashed or corrupted
						will result in losing the entire data of the project.
					</li>
				</UList>
				This is when Distributed VCS comes to the rescue.
			</P>
		</Main>
	)
}