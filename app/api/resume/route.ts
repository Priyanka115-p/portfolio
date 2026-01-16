import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
NIKITESH BHADADE
Web UI Developer
nikiteshb@gmail.com | 09561501506 | Pune, India

SUMMARY
Accomplished Sr. Software Engineer with a strong background at Globant India Pvt Ltd, focusing on React.js and JavaScript. Committed to delivering pixel-perfect UIs and advancing accessibility standards. Experienced in team leadership and driving innovative solutions, resulting in enhanced user experiences and compliance with contemporary web standards.

SKILLS
Frontend: React.js, JavaScript, HTML5, CSS3
Styling: SASS, LESS, Bootstrap 5, Tailwind CSS, MUI
CMS & Tools: Drupal, Wordpress, Figma, InVision
Design: Photoshop, Illustrator
Standards: Responsive web design, ADA/WCAG 2.2 AA accessibility standards
Version Control: Git

EXPERIENCE

Sr. Software Engineer
Globant India Pvt Ltd | 11/2020 – Present | Pune
• Led UI/frontend team of 5 designers to develop interactive user interfaces using JavaScript, HTML5, CSS3, SASS, React, and Drupal
• Delivered pixel-perfect UIs by converting PSD/Figma/InDesign designs into production web applications
• Revamped legacy products to boost performance and ensured compliance with new web standards
• Enhanced accessibility features/standards like WCAG 2.2 AA to meet current guidelines and improve user experience

Sr. Web Designer
Markets and Markets Research Pvt. Ltd | 05/2019 – 11/2020 | Pune
• Created responsive web pages, integrating PSD designs to HTML and Angular 7
• Designed UIs for dynamic email templates, enhancing user experience
• Restyled UI components for improved appeal and usability; managed version control with Git

Web Designer
Yardi Software India Pvt. Ltd | 10/2017 – 05/2019 | Pune
• Executed design process for dynamic/static email templates, integrating PSD to HTML/.NET framework
• Redesigned products for modern standards and ADA compliance
• Enhanced accessibility features/standards like WCAG 2.2 AA to meet current guidelines
• Managed frontend UI for Angular 2; resolved page issues efficiently

Web Designer
Circl Design India Pvt. Ltd | 04/2017 – 09/2017 | Pune
• Developed website projects using HTML, CSS, WordPress
• Created responsive layouts with Bootstrap, dynamic functions with JavaScript/jQuery

UI Engineer
Sycamore Software Solutions Pvt. Ltd | 06/2015 – 03/2017 | Pune
• Developed newsletters/web projects using HTML, CSS, WordPress, Bootstrap, and JavaScript/jQuery

Web Graphics Designer
Valency Realty Pvt. Ltd | 07/2014 – 05/2015 | Pune
• Led a team in pre-sales activities, digital and print campaigns, SEO/SMO initiatives
• Designed promotional graphics for campaigns and social media

EDUCATION

Master of Science in Computer Science
K. R. Pandav College, Nagpur University | 2012 | Nagpur

Bachelor of Computer Applications (BCA)
G.H. Raisoni Institute of Information Technology, Nagpur University | 2007 – 2011 | Nagpur

LANGUAGES
Marathi, Hindi, English

INTERESTS
Cricket, Photography, PC Games, Music
    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Nikitesh_Bhadade_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
