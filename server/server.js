Meteor.startup(function(){

    Meteor.methods({
        sendEmail: function(doc) {

            check(doc, Schema.contact);

            // Build the e-mail text
            var text = "Name: " + doc.name + "\n\n"
                + "Email: " + doc.email + "\n\n\n\n"
                + doc.message;

            this.unblock();

            // Send the e-mail
            // TODO add email configs
            //Email.send({
            //    to: EMAIL_HERE,
            //    from: doc.email,
            //    subject: "Website Contact Form - Message From " + doc.name,
            //    text: text
            //});

        }
    });

    var technologies = {
        pfsense: {
            title: 'pfSense',
            desc: 'Routing and Firewall server',
            link: 'https://www.pfsense.org/'
        },
        kvm: {
            title: 'KVM',
            desc: 'Kernel-based Virtual Machine',
            link: 'http://www.linux-kvm.org/page/Main_Page'

        },
        ubuntu: {
            title: 'Ubuntu',
            desc: 'Debian based Linux Server',
            link: 'http://www.ubuntu.com/server',
        },
        mysql: {
            title: 'MySQL',
            desc: 'Open Source SQL Database',
            link: 'https://www.mysql.com/'
        },
        owncloud: {
            title: 'Owncloud',
            desc: 'Cloud Storage',
            link: 'https://owncloud.com/'
        },
        neo4j: {
            title: 'neo4j',
            desc: 'Graph Database',
            link: 'http://neo4j.com'
        },
        nodejs: {
            title: 'Nodejs',
            desc: 'Server side Javascript',
            link: 'https://nodejs.org/'
        },
        meteorjs: {
            title: 'Metoerjs',
            desc: 'Javascript App Platform',
            link: 'https://www.meteor.com/#!'
        }

    }

    if(Tech.find().count() === 0){
        _.each(technologies, function(data){
            //console.log(data);
            Tech.insert(data);
        });
    }

});