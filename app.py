from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Sample data for posts (replace this with actual data from your database)
    posts = [
        {
            'username': 'user1',
            'caption': 'Beautiful sunset!',
            'image_url': 'https://example.com/image1.jpg'
        },
        {
            'username': 'user2',
            'caption': 'Amazing food!',
            'image_url': 'https://example.com/image2.jpg'
        },
        # Add more posts here...
    ]
    
    return render_template('index.html', posts=posts)

if __name__ == '__main__':
    app.run(debug=True)