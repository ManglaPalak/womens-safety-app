from flask import Flask, render_template, request, redirect
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Palak@2026'
app.config['MYSQL_DB'] = 'hersafetynet'

mys = MySQL(app)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/entryForm")
def entryForm():
    return render_template("EntryForm.html")


@app.route('/submit', methods=['GET','POST'])
def submit():
    if request.method == 'POST':
        # FETCH FROM DATA
        userDetails = request.form
        name = userDetails['Name of Respondent']
        area = userDetails['Name of the Area']
        feelsafecamp = userDetails['Do you feel safe in your college campus?']
        experiencedharrassment = userDetails['Have you experienced harassment while using public transportation?']
        awareofsafety = userDetails['Aware of Local Women\'s Safety initiatives or organisation?']
        commitedsecurity = userDetails['Are college authorities vigilant and actively committed towards women safety?']
        areasafe = userDetails['Is the area outside college safe?']
        reportedcrime = userDetails['Have you reported incidents of harassment or violence against you, if faced any?']
        experienceddiscrimination = userDetails[('Have you experienced any kind of discrimination at your '
                                               'workplace based on your gender?')]
        conductsworshops = userDetails[('Your college conducts educational programs and workshops on campus safety'
                                      ' and harassment prevention.')]
        takeseriously = userDetails[('Do you believe that campus authorities take reports of harassment or assault'
                                   ' seriously?')]
        emergencybox = userDetails[('Emergency call boxes or safety phones are readily available and accessible '
                                  'on campus.')]
        securityvisible = userDetails['College campus security presence is visible and reassuring.']
        awareofcounselling = userDetails[('Are you aware of counselling and mental health resources available to '
                                        'students who have experienced harassment or assault.')]
        saferiding = userDetails['Do you feel safe using ride-sharing services like Uber or Lyft.']
        safepublicplaces = userDetails[('Do you feel safe using public restrooms and facilities in public places, '
                                      'such as malls, parks, and restaurants.')]
        enoughawareness = userDetails[('Do you believe that there is enough awareness and action being taken to '
                                     'ensure the safety and well-being of women in college campuses and in '
                                     'society at large?')]
        benefitfromweb = userDetails['Do you feel that you would benefit from a women\'s safety mobile/web application?']
        incident = userDetails[('If you have been in any incident, where you have stopped such crime from '
                              'happening which happened to you or others , you can share it here. Your name '
                              'will not be shared anywhere.Otherwise write NO')]
        redtime = userDetails['Red time zones ( becomes unsafe after what time)']
        cur = mys.connection.cursor()
        cur.execute("INSERT INTO dataset VALUES "
                    "(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                    (name, area, feelsafecamp, experiencedharrassment, awareofsafety, commitedsecurity, areasafe,
                     reportedcrime, experienceddiscrimination, conductsworshops, takeseriously, emergencybox,
                     securityvisible, awareofcounselling, saferiding, safepublicplaces, enoughawareness,
                     benefitfromweb, incident, redtime))
        mys.connection.commit()
        mys.connection.close()
        return redirect('/responses')


@app.route("/responses")
def responses():
    cur = mys.connection.cursor()
    cur.execute("select * from dataset")
    val = cur.fetchall()
    return render_template("responses.html", data=val)


if __name__ == '__main__':
    app.run(debug=True)
