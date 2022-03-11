function sendEmail(email, subject, body, massges) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'datnguyencd2002@gmail.com',
        Password: "wmumlcgsiwdmwoqh",
        To: `${email}`,
        From: 'datnguyencd2002@gmail.com',
        Subject: `${subject}`,
        Body: `${body}`
    })
        .then(massge => {
            alert(massges)
        })
}