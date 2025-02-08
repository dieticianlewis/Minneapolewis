<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Homepage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <img src="images/logo.png" alt="My Logo" class="logo">
            <h1>Welcome to My Website!</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>  <!--  Example links;  make these # for now -->
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h2>About Me</h2>
                <p>
                    <?php
                        // Simple PHP example: Displaying dynamic content (you can change this)
                        $greeting = "Hello!  This is a basic homepage.  You can add your own content here.";
                        echo $greeting;
                    ?>
                </p>
                <p>
                    This is a paragraph where you can introduce yourself, your work,
                    your interests, or anything else you want to share.  Feel free to
                    replace this text with your own content.  You can add more paragraphs,
                    images, lists, and other elements as needed.
                </p>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <h2>My Skills/Projects</h2>
                <div class="feature-grid">
                   <div class="feature">
                        <h3>Skill/Project 1</h3>
                        <p>Short description of the skill or project.</p>
                   </div>
                   <div class="feature">
                       <h3>Skill/Project 2</h3>
                       <p>Short description of the skill or project.</p>
                    </div>
                    <div class="feature">
                       <h3>Skill/Project 3</h3>
                       <p>Short description of the skill or project.</p>
                    </div>
                </div>
            </div>
         </section>
    </main>

    <footer>
        <div class="container">
            <p>© <?php echo date("Y"); ?>  Your Name or Company. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
