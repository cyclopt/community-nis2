const questions = {
	1: {
		title: "Cybersecurity Administration and Risk Management",
		questions: [
			{
				id: "1",
				question: "The Organisation has a distinct organisational unit responsible for the security of information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "2",
				question: "The Organization has appointed a Chief Information Security Officer (CISO), whose main responsibilities are to provide strategic-level guidance on cybersecurity issues, oversee and monitor the information security management system, ensure the Organization's compliance with relevant legislation and regulations and coordinate cybersecurity objectives with the Organization's business objectives.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization shall provide the CISO with all the logistical, financial and human resources necessary for the performance of his/her tasks, as well as the resources necessary to maintain his/her expertise.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has designated a person as a data protection officer to ensure adequate privacy protection and compliance of the Organization with personal data protection legislation.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has clearly established cybersecurity roles and responsibilities for all staff, as well as for suppliers and service providers. The roles and responsibilities are periodically reviewed to ensure their appropriateness.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization shall commit an amount in its annual budget exclusively for the management and implementation of cybersecurity projects.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The organisational approach and management of cybersecurity issues is actively supported and guided by the highest level of leadership in the Organization. Decisions taken are effectively communicated to managers and service structures with appropriate roles and responsibilities for practical implementation.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization has a documented and approved security policy, which describes its management approach to the security of network and information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no security policy" },
					{ value: "1", label: "The security policy is empirically applied" },
					{ value: "2", label: "There is a partially written security policy" },
					{ value: "3", label: "There is a written security policy" },
					{ value: "4", label: "The security policy is written and approved" },
				],
			},
			{
				id: "9",
				question: "The Organization's security policy has been approved by the senior management.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization's security policy also refers to other policies and procedures, which specify in specific thematic areas how technical and organizational protection measures are to be implemented.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization shall review the security policies on a periodic basis or when significant changes occur in the organizational, operational, technical and legal environment of the Organization. The revised policies shall be approved by senior management.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "Procedures specifying thematic cybersecurity issues are reviewed on a periodic basis or when significant changes occur in the organizational, operational, technical and legal environment of the Organization. The revised procedures shall be approved by an organizational unit or task force at a hierarchical level in relation to their criticality.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "13",
				question: "Policies and procedures related to cybersecurity are seamlessly integrated with the rest of the organizational and operational processes of the Organization.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "14",
				question: "The Organization shall implement risk assessment procedures to identify, analyze, evaluate and manage risks to network and communication systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "15",
				question: "The risk assessment is conducted when significant changes take place including: a) technical changes to the systems that support the delivery of the Organization's critical services, b) changes in the cyber threat environment.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "16",
				question: "The Organization implements risk assessment procedures by applying internationally accepted methodologies, the result of which constitutes a comprehensive set of documented requirements and safety measures in order to adequately address the risks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "17",
				question: "The results and conclusions of the risk assessment are communicated within a reasonable time to persons with decision-making roles and corresponding responsibility and accountability.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "18",
				question: "The Organization shall periodically evaluate the effectiveness of the risk assessment procedures and implement improvements where necessary.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "19",
				question: "The Organization has developed key performance indicators (KPIs) against which it assesses all cybersecurity-related policies and procedures. The results of the evaluation are communicated to senior management.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "20",
				question: "The Organization implements a cyber threat intelligence program to develop an adequate understanding of the mechanisms, indicators and behaviour of existing and emerging cyber threats.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "21",
				question: "The Organization has been certified to implement an integrated information security management system, in order to adequately protect the confidentiality, integrity and availability of its data. Examples include ISO 27001, PCI DSS, NIST Cyber security framework, ISA/IEC 62443 etc.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	2: {
		title: "Hardware and Software Inventory",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the recording and proper use of IT hardware, systems, applications and data.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization has developed a documented policy and implementation procedures concerning the proper use of mobile devices (laptops, tablets, smartphones), as well as portable storage media (usb, external hard disks, cd, dvd).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "3",
				question: "The Organization maintains an accurate and up-to-date asset inventory of all IT assets (hardware and software) held in its physical infrastructure, as well as applications hosted in cloud environments. The inventory contains detailed information such as name, owner, IP address (if static), MAC address, version, operation description, location, etc.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has designated an owner for each IT asset in order to ensure responsibility and accountability throughout the life cycle of the asset.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has classified its IT assets (hardware, software, data) into distinct groups according to their criticality and sensitivity to its business operations.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has identified the sensitive data it processes, in accordance with personal data protection legislation, as well as critical operational data, in accordance with its regulatory requirements and operational needs.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization implements a secure retirement process for fixed and mobile devices, which confirms the deletion of critical and personal data from devices prior to retirement.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization ensures that the mobile devices (laptops, tablets, smartphones) that employees bring to the workplace (“bring your own device”) cannot access critical or sensitive systems of the Organization.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization ensures that if employees' own mobile devices (laptops, tablets, smartphones) that they bring to the workplace (“bring your own device”) get access to the Internet, this is done only through a network that is separate from the rest of the Organization's network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization ensures that if the personally owned mobile devices (laptops, tablets, smartphones) that employees bring to the workplace (“bring your own device”) get access to critical or sensitive data, they are checked and configured with appropriate protection measures by the technical services of the Organization.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization uses a tool that programmatically scans its network and identifies the devices connected to it, together with their characteristics, in order to regularly update the list and identify any unauthorised devices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	3: {
		title: "Secure Configuration of Equipment and Applications",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the secure configuration of equipment, operating systems and applications.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization shall implement an approved secure configuration process, based on internationally accepted standards and guidelines, for the operating systems of workstations, servers and network devices, adapted to the Organization's security policy.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "3",
				question: "The Organization uses only supported versions for the operating systems of workstations, servers and network devices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "4",
				question: "The Organization shall implement an approved procedure for the withdrawal of equipment, operating systems and applications for which support from the manufacturer or provider has expired.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "5",
				question: "The Organization shall download security updates and software upgrades for the operating systems of workstations, servers and network devices in an automated manner, at least on a monthly basis.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "6",
				question: "The Organization shall download security updates and software upgrades for its business applications in an automated manner, at least on a monthly basis.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "7",
				question: "The Organization uses only the latest and up-to-date versions for important client applications, such as office software, pdf readers, web browsers and browser plugins, as well as email clients.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "8",
				question: "The Organization uses only the latest and up-to-date versions for each of its application servers accessible from the Internet.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "9",
				question: "The Organization implements a firewall as an application on each workstation and server (host-based), which is configured to block all network connections to and from the device with the exception of ports and services required based on business needs.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "10",
				question: "Any unnecessary services on the network devices have been disabled.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The “port security” function is enabled on the switches.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "Routers have disabled interfaces and routing protocols that are not in use.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "13",
				question: "On switches, ports that are not in use are disabled.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "14",
				question: "2-factor authentication is applied for access to the management environment of all critical network devices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "15",
				question: "The Organization shall ensure that in those systems classified as critical, it is not possible to connect portable storage media (USB, external hard disks, CDs, DVDs) unless there is a strict operational need to do so.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "16",
				question: "The Organization shall ensure that the default passwords in each new product are modified during the first installation of the product.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "17",
				question: "The Organization keeps complete backups (system images) of its operating systems, with basic security settings, in encrypted form, with access restrictions and file integrity monitoring.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	4: {
		title: "Program and Service Execution Control",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures to control the installation and execution of programs and services on its network and systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization shall ensure that servers and workstations operate only the ports, protocols and network services necessary to carry out its business functions.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "3",
				question: "The Organization ensures that if there is a business need for non-privileged users to install software, this can only happen with approved applications stored in software repositories controlled by the Organization.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has created a list of authorized applications and their components (libraries, configuration files, etc.) and has ensured that only these are allowed to run on servers and workstations (application whitelisting).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "5",
				question: "The Organization applies appropriate techniques so that only approved scripts, i.e. specific .ps1, .py, etc. files are allowed to run. The execution of unauthorized scripts is prevented.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "6",
				question: "The Organization performs on a regular basis automated port scanning throughout the Organization's network in order to detect unauthorized open network ports and services on systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization ensures that non-privileged users cannot disable or modify the security settings on their operating system.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization has ensured that in Microsoft Windows environment and on user accounts with standard (non-privileged) privileges, script execution engines are disabled.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization implements appropriate settings in the firewall of the external network perimeter to block incoming and outgoing Internet communication on the following ports: TCP 445 (SMB), UDP 137 (NetBIOS Name Resolution), UDP 138 (NetBIOS Datagram Service) and TCP 139 (NetBIOS Session Service).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization implements appropriate settings to block incoming SMB connections on TCP port 445 on those workstations and servers that do not host shares.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "11",
				question: "The Organization has disabled SMBv1 and v2 on the internal network and has upgraded to v3 or the latest version.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	5: {
		title: "Account Management and Access Control",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures for managing user accounts and controlling access to its network, systems, applications and data.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization has ensured that Organization staff and external partners who acquire a user account are uniquely identified in order to ensure accountability.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization implements an automated process for granting access to its assets whenever new staff are hired, rights are granted or users change roles.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has an automated process for revoking access to its assets, through the immediate deactivation of accounts with every employee interruption, revocation of rights or change of role of users.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has disabled the default accounts on its assets and software, such as root, administrator or other pre-existing corporate accounts.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "6",
				question: "The Organization shall keep an inventory of all user accounts, containing at least the name, start/end date, privileges and job title of the staff member.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization shall keep an inventory of all service accounts used. The inventory shall contain at least the owner, the purpose and the date of revision.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization deactivates user accounts after a certain period of inactivity (e.g. 3 months).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization assigns access rights on the basis of distinct roles, so that users have access only to the type of information necessary to perform their job duties, based on the principles of least privilege and need to know.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization shall ensure that users who perform exclusively non-administrative routine daily tasks (e.g. using word, excel, adobe reader, reading and sending e-mails, browsing the Internet, etc.) are granted exclusively a standard non-privileged account.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization shall ensure that users whose duties require them to perform administrative tasks are granted an account of enhanced privileges to be used exclusively for such tasks. Such accounts shall not have access to email and Internet services.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "The Organization shall ensure that users whose duties require them to have a privileged account are granted a second standard non-privileged account to perform routine non-administrative tasks (e.g. using word, excel, adobe reader, reading and sending e-mails, browsing the Internet, etc.).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "13",
				question: "The Organization has implemented centralized account management through a directory service (e.g. Active directory service).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "14",
				question: "The Organization applies the ‘dual authorisation’ technique, so that the approval of two authorised users is required for the execution of particularly critical and sensitive instructions or functions.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	6: {
		title: "User Authentication",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the authentication of users in order to prevent unauthorized access to its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization shall implement authentication mechanisms requiring the creation of strong passwords for its information systems. Strong passwords shall be those that are at least twelve (12) characters in length and contain a minimum of one (1) uppercase letter, one (1) lowercase letter, one (1) number and one (1) special character cumulatively and do not contain names or common words found in dictionaries. Strong code generation mechanisms may include the ability to generate passphrases.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization shall implement multi-factor authentication for network access to all management accounts, including third-party accounts.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization applies multi-factor authentication for all remote access connections on its network. This requirement shall be implemented for all employees of the Agency (in non-privileged and management accounts), as well as for third parties as part of their contractual obligation to provide support or maintenance services for the Organization's systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization applies multi-factor authentication for each user who wishes to access critical or sensitive data.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has set a maximum limit of (three to five) consecutive unsuccessful attempts to log in to an account, beyond which the account will be locked for a predetermined period of time.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "7",
				question: "The Organization shall ensure that passwords are stored in encrypted form. The encryption is done using one-way hash algorithms with the additional addition of a random data sequence (salt) in the calculation.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization has configured the workstations to activate a screen lock after a maximum of 15 minutes of user inactivity, in order to prevent unauthorized access. In order to unlock the screen, the user must be re-authenticated.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization implements multi-factor authentication by sending a one-time password using a mobile application instead of SMS.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization shall implement a public key infrastructure for the authentication of users using a digital certificate.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	7: {
		title: "Network Security",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the secure architecture of its networks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization shall maintain an up-to-date network and data flow diagram showing all network connections, including wireless networks, and the transmission flows of sensitive data between all Organization systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization keeps a protected archive of all routing rules, as well as access control lists of firewalls.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization's servers that have a public IP address (e.g. web servers, mail servers, VPN servers, etc.) belong to a distinct network zone (subnet) that is physically or logically separated from the internal network of the Organization. This implementation is called a de-militarized zone (DMZ).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has installed a firewall on the outer perimeter of the network, which allows only the inbound and outbound traffic necessary for the execution of its business functions.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has divided its internal network into distinct sub-networks based on the level of sensitivity of its business areas (network segmentation).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization applies traffic filtering between subnets in order to limit the flow of information to that which is strictly necessary for its business needs.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization shall ensure that remote user access to its internal network is via a Virtual Private Network (VPN), using 2-factor authentication and the latest encryption algorithms.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization implements an application firewall in front of each critical server, in order to block malicious traffic.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "10",
				question: "The Organization shall implement network intrusion detection/prevention systems in order to detect and prevent attacks on each of the Organization's sub-networks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization understands the ways in which the service it provides can become overloaded, and the limits (in bandwidth, processing power and storage space) beyond which the availability of the service is at risk of being interrupted.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "The Organization implements the use of domain registrar locking in order to prevent a denial of service event due to unauthorized deletion, transfer or alteration of its domain registration.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "13",
				question: "The Organization has ensured that its infrastructure has a redundancy of resources that allows it to withstand a denial of service attack.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "14",
				question: "The Organization has separated its critical services from other services that are more likely to be targeted (e.g. web services).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "15",
				question: "The Organization implements systems to monitor the availability of its critical services, which detect denial of service attacks and send real-time alerts.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "16",
				question: "The Organization has contracted a specialist cloud security as a service provider to provide services to protect its public access applications from distributed denial of service attacks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "17",
				question: "The Organization has ensured that any public access wireless networks it has are separated from the rest of its network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "18",
				question: "The Organization shall implement network access control systems to prevent unauthorized devices from connecting to its network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "19",
				question: "The Organization implements a wireless intrusion detection system (WIDS) to detect unauthorized wireless access points connected to its network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "20",
				question: "The Organization implements a data diode in hardware form, which enforces data flow in only one direction in order to protect critical information on high-security subnets.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	8: {
		title: "Malware Protection",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures to protect its information systems from malware infection.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization implements anti-malware software on each workstation and server, which is implemented through centralized management and updated on a regular basis in an automated manner.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "3",
				question: "The Organization implements the DNS filtering service to block access to known malicious domains.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has registered domain names that are similar to its domain name in order to prevent attackers from registering them for malicious purposes.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has ensured that anti-malware scanning is automatically performed on portable storage media (USB, external hard drives, CDs, DVDs) when they are connected to devices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization implements spam protection technologies at all entry and exit points of its infrastructure (firewalls, email/web/proxy/remote access servers, workstations, laptops, mobile devices), in order to block malicious content.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "7",
				question: "The Organization implements and enforces network URL filters in order to limit the ability to connect to websites not approved by the Organization's security policy.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization has ensured that all network traffic to and from the internet passes through an authenticated application layer (web) proxy server, which is configured to deny unauthorized connections and block malicious content.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization has ensured that any unauthorized plug-ins or add-ons in web browsers and e-mail clients have been disabled or uninstalled.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization has implemented a host-based intrusion prevention system on its end devices. An example is the use of EDR (Endpoint Detection and Response) tools.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
		],
	},
	9: {
		title: "Keeping and Analysis of Event Logs",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the recording, monitoring and analysis of events in its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization has enabled event logs on all workstations, servers and network devices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "3",
				question: "The Organization has ensured synchronization between the clocks of all devices, so as to achieve accuracy in the correlation of events between different systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has enabled logging of successful and unsuccessful login and logout for all systems requiring authentication.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "5",
				question: "The Organization has activated the recording of all activities relating to management accounts.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has ensured that access events to files and server processes are logged.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization has ensured that incidents of failed attempts to execute files are recorded.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "8",
				question: "The Organization has ensured that incidents of use and attempted use of special privileges are recorded.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "9",
				question: "The Organization has ensured that system application usage events are recorded.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "10",
				question: "The Organization has ensured that events of changes to accounts and security policy are recorded.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "11",
				question: "The Organization has ensured that HTTP and DNS request events are logged.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "12",
				question: "The Organization has ensured that data transfer events to and from portable storage media are recorded.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "13",
				question: "The Organization has configured the event logs to include detailed metadata such as event source, date, user, timestamp, source IP address, destination IP address, etc.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "14",
				question: "The Organization has ensured that incident logs are kept for a period of at least one (1) year.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "15",
				question: "The Organization has ensured that the event logs are adequately protected against unauthorized access, modification and deletion.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "16",
				question: "The Organization has ensured that the management of the event logging function is delegated to a subset of users with elevated privilege accounts.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "17",
				question: "The Organization has installed a Security Information and Event Management (SIEM) system to centralize event logs in a central location and to analyze and correlate them to identify suspicious activity.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	10: {
		title: "Web Application Security",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the security of its web applications.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization shall define the security requirements for each application to be developed, whether in-house or outsourced. The requirements shall correspond to the degree of criticality of the functions of the application and the sensitivity of the data it processes.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization shall ensure that reliable and fully up-to-date application development platforms are used, as well as software libraries from trusted sources and actively maintained.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization shall ensure that secure development lifecycle techniques are applied throughout the lifecycle of its web applications (design, development, testing, production operation, maintenance), whether they are developed in-house or outsourced.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization shall ensure that common types of vulnerabilities, such as the OWASP Top-10, are taken into account when developing web applications.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "6",
				question: "The Organization ensures that during the development of web applications all input data (HTML form fields, REST requests, URL parameters, HTTP headers, cookies, batch files, RSS feeds, etc.) are syntactically and semantically validated (input validation) using white-list filtering on the server side.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "7",
				question: "The Organization ensures that all web server communication (with user browsers, calls to other web services, databases, cloud etc.) is implemented with encryption of the connection using the latest version of the TLS protocol (encryption in transit).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "8",
				question: "The Organization shall ensure that during the development of applications, control and error and exception management techniques are implemented for each type of incoming data, taking into account the type, size, format and acceptable range of values.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "9",
				question: "The Organization shall ensure that its web applications, whether developed in-house or outsourced, allow only strong passwords.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "10",
				question: "The Organization shall ensure that its web applications, whether developed in-house or outsourced, implement 2-factor authentication where the security requirements of the application specify.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "11",
				question: "The Organization shall ensure that its web applications, whether developed in-house or outsourced, implement the principle of least privilege.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "12",
				question: "The Organization shall ensure that its web applications, whether developed in-house or outsourced, implement query parameterization techniques on each item entered into the application's database management system.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "13",
				question: "The Organization shall ensure that its web applications, whether developed in-house or outsourced, implement output encoding and character escaping techniques just before the input data enters the application's interpreter.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "14",
				question: "The Organization shall ensure that in its web applications, whether developed in-house or outsourced, the HTTP protocol response headers are configured to implement Content-Security-Policy, HSTS and X-Frame-Options.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "15",
				question: "The Organization shall ensure that in its web applications, whether developed in-house or outsourced, each time a user authenticates, the application creates a new session token using approved cryptographic algorithms.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "16",
				question: "The Organization shall ensure that in its web applications, developed either in-house or outsourced, when the user logs out and the session expires, the session token is invalidated, so that the use of the back button does not reset an authenticated session.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "17",
				question: "The Organization ensures that in its web applications, developed either in-house or outsourced, the application data classified as critical/sensitive are stored in encrypted form (encryption at rest).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "18",
				question: "The Organization ensures that in its web applications, developed either in-house or outsourced, the session tokens based on cookies have the attributes “Secure”, “HttpOnly”, ‘SameSite’ and the prefix “__Host-” enabled.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "19",
				question: "The Organization shall ensure that a vulnerability test is carried out for each new functionality added to the application during its successive stages of development.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "20",
				question: "The Organization shall ensure that a penetration test is carried out before the final version of the application is put into production.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
			{
				id: "21",
				question: "The Organization applies the TLS inspection technique, whereby web traffic carried over HTTPS connections is decrypted and inspected in order to detect malicious content.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "22",
				question: "The Organization implements a web application firewall, either on its infrastructure or as an outsourced cloud service (security as a service), which monitors HTTP traffic to its web applications for known types of attacks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some applications" },
					{ value: "2", label: "Implemented in most applications" },
					{ value: "3", label: "Implemented in all applications" },
				],
			},
		],
	},
	11: {
		title: "Remote Work",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy, as well as implementation procedures, concerning the implementation of remote work of staff in a secure manner.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "There is no policy and procedures" },
					{ value: "1", label: "Policy and procedures are empirically applied" },
					{ value: "2", label: "There are partially written policy and procedures" },
					{ value: "3", label: "There are written policy and procedures" },
					{ value: "4", label: "The policy and procedures are written and approved" },
				],
			},
			{
				id: "2",
				question: "The Organization ensures that VPNs and firewalls have the latest version of operating systems (up to date) and that they receive security updates and software upgrades at regular intervals in an automated manner.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization shall ensure that 2-factor authentication, including strong passwords, is applied to all VPN connections to its internal network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization applies internationally accepted security settings for the use of the Remote Desktop Protocol (RDP).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has provided employees with a laptop computer for remote work needs, which has been properly configured by the Organization's IT services to meet the required security arrangements.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has provided teleworking staff with appropriate instructions on how to implement basic security parameters for their home network, their personal computer and their online behaviour on the Internet.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	12: {
		title: "Use of Cryptography",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the use of cryptography in its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization ensures that data classified as critical/sensitive is encrypted during transmission (encryption in transit).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization ensures that data classified as critical/sensitive is encrypted during storage (encryption at rest). Such data may reside on servers, applications, and databases.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "4",
				question: "The Organization ensures that only the latest versions of approved cryptographic protocols and software are used during encryption, as well as the appropriate key lengths.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "When using cryptography for symmetric encryption, the AES algorithm is used with a key length of 128, 192, or 256 bits.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "When using cryptography for digital signatures, the RSA algorithm is used with a key length of at least 2048 bits, or the ECDSA algorithm is used with a key length of at least 224 bits.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "When using cryptography for the implementation of hashing algorithms (e.g., digital signatures, etc.), the Secure Hash Algorithm 2 (SHA-2) is used, with a choice of SHA-256, SHA-384, or SHA-512.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization implements comprehensive management (creation, storage, control, distribution) of symmetric and asymmetric encryption keys, using internationally accepted standards and procedures, including strict access controls to the management platform.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization uses public key-based authentication for the implementation of SSH (Secure Shell) connections.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
		],
	},
	13: {
		title: "Cybersecurity Education and Awareness Raising",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy, as well as implementation procedures, concerning cybersecurity training and awareness of staff.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization periodically conducts a training programme to raise awareness and develop staff skills in cybersecurity issues. The training curriculum shall include how users can interact with the Organization's systems, network and data in a secure manner.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization periodically conducts a training programme to raise awareness and develop staff skills in cybersecurity issues. The training curriculum includes ways to identify social engineering attacks such as phishing emails, impersonation phone calls, etc.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization periodically conducts a training programme to raise awareness and develop staff skills in cybersecurity issues. The training curriculum shall include good authentication practices such as strong passwords and multi-factor authentication.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization periodically conducts a training programme to raise awareness and develop staff skills in cybersecurity issues. The training curriculum shall include the identification of indications of system breaches and incidents originating from insider threats.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization periodically conducts a cybersecurity awareness training programme for staff based on distinct roles and targeted at different categories of employees based on their business scope and level of technical expertise.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization has carried out a knowledge gap analysis of its staff in order to draw up a plan for the creation of successive trainings.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization periodically conducts exercises to simulate cybersecurity incidents and their consequences, such as opening a malicious file attached to an email or visiting a malicious website.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	14: {
		title: "Supply Chain Risk Management",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning risk management in its supply chain, in order to ensure the protection of its information systems from the use of information and communication technology products and services from third party suppliers and service providers.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization periodically conducts a thorough supply chain risk management survey and assessment of its IT suppliers and service providers, including their subcontractors, taking into account parameters such as partnerships, competitors and countries of origin, in order to gain comprehensive knowledge of its supply chain and the level of risk it faces.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization shall ensure that IT service contracts detail the type of systems and data to which the provider will have access during the performance of the contract.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has developed and communicated a set of minimum cybersecurity requirements to suppliers and service providers, which reflect its risk assessment and requires both them and their subcontractors to provide visible evidence of their compliance with these requirements.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has developed and communicated different sets of security requirements for different categories of contracts, depending on the level of risk for each category.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization shall ensure that actions taken upon termination or expiry of a service contract include the deactivation of user accounts and services, the termination of data streams and the secure deletion of Organization data residing on the contractor's systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization has implemented assurance requirements for its suppliers and service providers, such as penetration tests, external audits and/or internationally accepted security certifications. In addition, it has implemented key performance indicators to measure the performance of the entire supply chain with regard to their cybersecurity management practices.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	15: {
		title: "Implementation of Cybersecurity Technical Audits",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy, as well as implementation procedures, concerning the performance of periodic technical cybersecurity audits of its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization performs on a regular basis (e.g. once a month) automated vulnerability scanning of its information systems in order to identify potential vulnerabilities in its network, systems and applications.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "3",
				question: "The Organization shall implement an approved procedure to repair the vulnerabilities detected in its goods on a monthly basis.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization shall periodically (e.g. once a year) carry out a full vulnerability assessment of its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization shall conduct an external penetration test on a periodic basis (e.g. once a year) to simulate a cyber-attack launched from outside the Organization's network perimeter.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization shall conduct an internal penetration test on a periodic basis (e.g. once a year) in order to simulate a cyber-attack on the internal network of the Organization.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization conducts on a periodic basis (e.g. once a year) “red team/blue team” exercises to simulate cyber attacks by known high-profile cybercriminal groups.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization shall implement an approved procedure for the repair of findings identified in intrusive inspections or red/blue team exercises based on a clear prioritization plan. It shall also implement a process to validate the additional safety measures required for the repair.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	16: {
		title: "Physical Security Measures for Facilities",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures concerning the physical security of the facilities hosting its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization has ensured that the premises housing its servers (computer room) have control mechanisms on the external perimeter (indicatively: barriers, locks, alarms) to protect against unauthorized physical access.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization has ensured that the premises housing its servers (computer room) have an adequately staffed reception area that registers visitors as they enter the building.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization shall keep a list of persons authorized to access the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "Access to the Organization's computer room by authorized persons is only possible with the use of a smartcard.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization implements an alarm system in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization implements redundancy in systems and networking circuits in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization implements UPS, for uninterrupted power supply and the possibility of controlled shutdown of machines and devices in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization implements fire detection and fire-fighting systems in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization implements automated temperature, humidity and pressure controllers in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization implements water leakage protection systems in the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "The Organization has installed closed circuit television (CCTV) to monitor the exterior and interior of the computer room.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	17: {
		title: "Security Backups",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy, as well as implementation procedures, concerning the backup of its information systems. These procedures include issues such as the prioritization, value and criticality of data and the retention requirements of the backups taken.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization has ensured that all its important information systems are backed up in an automated way on a daily basis, combining in an appropriate way the available technologies (full, incremental, differential).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization has ensured that the received backups are protected by encryption in transit.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "4",
				question: "The Organization has ensured that the received backups are protected by adequate security measures during their storage. Examples include encryption, multi-factor authentication, access control, etc.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization has ensured that the backups are stored in at least one (1) offline destination that is not connected to a network.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "6",
				question: "The Organization shall carry out an integrity check of the backups on a periodic basis.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "7",
				question: "The Organization performs a data restoration test on a periodic basis to validate that the backup is working properly.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "Not implemented" },
					{ value: "1", label: "Implemented in some systems" },
					{ value: "2", label: "Implemented in most systems" },
					{ value: "3", label: "Implemented in all systems" },
				],
			},
			{
				id: "8",
				question: "The Organization stores the received backups in different geographically dispersed locations.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	18: {
		title: "Cybersecurity Incident Response",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures for dealing with cyber security incidents in its information systems.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization has developed a detailed cybersecurity incident response plan.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization's cybersecurity incident response plan includes preparation for a potential incident. This phase includes the assessment of critical systems, threat analysis, implementation of security measures and organization of human resources in the whole process.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization's cybersecurity incident response plan includes incident detection and analysis.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization's cybersecurity incident response plan includes containment of the infection and elimination of all elements that caused the incident.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization's cybersecurity incident response plan includes data and functionality recovery.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization's cybersecurity incident response plan includes collecting all evidence of the incident, preparing a detailed report and informing the parties involved and the competent authorities.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization's cybersecurity incident response plan includes reviewing and developing knowledge from the incident data in order to strengthen the Organization against future attacks.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization has established a cybersecurity incident response team of its staff and has assigned specific roles and responsibilities. Where it is not feasible to develop the team in-house, it has outsourced the task to a specialist provider of similar services.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization has ensured that its cybersecurity incident response team, either its own or that of a third-party provider, has access to sufficient data sources and tools that monitor information systems to detect key breach indicators.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "11",
				question: "The Organization shall, at regular intervals, conduct cyber security incident response training for staff with relevant responsibilities. The training shall include technical and non-technical modules and shall be differentiated according to the roles assigned.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "12",
				question: "The Organization has designed and periodically conducts simulated cybersecurity incident exercises to enable the relevant response team to develop awareness and management capability against real threats.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "13",
				question: "The Organization has implemented a Security Operations Center (SOC), equipped with the appropriate specialized tools (monitoring, scanning and forensic tools) and staffed with the necessary specialized personnel, in order to detect and respond to cybersecurity incidents in a timely manner. The SOC may be implemented either in-house or outsourced as a service to a specialized service provider.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
	19: {
		title: "Ensuring Business Continuity and Disaster Recovery",
		questions: [
			{
				id: "1",
				question: "The Organization has developed a documented policy and implementation procedures to ensure business continuity and recovery from a disaster of its critical information systems following an adverse event.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No policy and procedures exist" },
					{ value: "1", label: "Policy and procedures are applied empirically" },
					{ value: "2", label: "Partially documented policy and procedures exist" },
					{ value: "3", label: "Documented policy and procedures exist" },
					{ value: "4", label: "Approved documented policy and procedures exist" }
				],
			},
			{
				id: "2",
				question: "The Organization has identified its critical systems and operations and has carried out an assessment of the impact of the occurrence of adverse events (cyber-attack, natural disaster, etc.).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "3",
				question: "The Organization has developed and documented a detailed business continuity plan in order to immediately restore and continue the availability of its critical functions and services following an adverse event.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "4",
				question: "The Organization has established a specific team of staff, which has full knowledge of business continuity plans and a corresponding ability to implement the necessary actions to restore the Organization's business operations in the event of an adverse event.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "5",
				question: "The Organization shall carry out on a regular basis exercises to test the business continuity and disaster recovery measures, in particular where there have been major technical and procedural changes to the operational function.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "6",
				question: "The Organization has implemented redundant resources in its existing systems architecture to meet availability requirements.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "1", label: "Partially" },
					{ value: "2", label: "To a great extent" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "7",
				question: "The Organization has implemented an alternative data storage (backup site) located at a sufficient mileage from the primary storage site, in order to reduce its vulnerability to the same category of threats.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "8",
				question: "The Organization has contracted a specialized cloud service provider to provide a disaster recovery service (disaster recovery as a service), in order to immediately transfer the Organization's business operations to another environment using virtualization technologies.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "9",
				question: "The Organization has implemented a disaster recovery site located at a sufficient distance from the primary site in order to reduce its vulnerability to the same category of threats.",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
			{
				id: "10",
				question: "The Organization is certified to implement, maintain and improve a management system under which it prepares, responds and recovers critical operations and continues to provide products and services at an acceptable level in the event of an adverse event (e.g. ISO 22301).",
				defaultValue: null,
				answers: [
					{ value: "0", label: "No" },
					{ value: "3", label: "Yes" },
				],
			},
		],
	},
};

export default questions;
