

export default function DemoComponent() {
  const DynamicDiv = 'div';
  return (
    <>
      <header>
        <div>
          <a href="#maincontent">Skip to main content</a>
        </div>
        <a href="/"></a>
        <img src="" alt="" className="logo" />
        <nav>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </nav>
      </header>

      <main className="main-container" id="maincontent">
        <article>
          <h1>
            This is the H1 Heading
          </h1>
          <DynamicDiv>This is a dynamic div</DynamicDiv>
          <p>
            This is a paragraph. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ex architecto facilis non ab unde et debitis repudiandae esse aperiam temporibus laborum reprehenderit voluptatem quos iste nostrum id ipsam, eaque sapiente, repellendus voluptatibus minus? Dolorum ab, sequi nihil nulla quasi ducimus dolores saepe nam, quae obcaecati eum et recusandae reprehenderit.
          </p>

          <div>
            This is a div. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aspernatur fuga! Possimus sint expedita voluptatibus sunt blanditiis rem itaque quod ducimus tempore distinctio error nulla quis laborum magni magnam, fugiat suscipit. Consequuntur, nam tenetur quis qui velit commodi saepe nobis, ipsa reiciendis expedita porro dolorum tempora doloribus cum laudantium ratione voluptatem at? Nostrum natus tempora consequuntur veniam similique optio aliquid!

          </div>

        </article>
        <form>
          <label htmlFor="nameId">FirstName:</label>
          <input type="text" name="fname" id="fname" autoComplete="fname" />
          <br />
          <label>Name: <input type="text" name="lname" autoComplete="lname" /></label>
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" autoComplete="email" />
          <br />
          <label htmlFor="address">Name:</label>
          <br />
          <textarea name="address" id="address" cols="30" rows="10"></textarea>
          <fieldset>

            <legend>Select you pizza toppings:</legend>
            <input type="checkbox" name="toppings" id="ham" value="ham" />
            <label htmlFor="ham">Ham</label><br />
            <input type="checkbox" name="toppings" id="pepperoni" value="pepperoni" />
            <label htmlFor="pepperoni">Pepperoni</label><br />
            <input type="checkbox" name="topping" id="mushroom" value="mushroom" />
            <label htmlFor="mushroom">Mushroom</label><br />
          </fieldset>
          <br />
          <fieldset>
            <legend>
              Choose a shipping method:
            </legend>
            <input type="radio" name="shipping" id="overnight" value="overnight" />
            <label htmlFor="overnight">Overnight</label><br />
            <input type="radio" name="shipping" id="twoday" value="twoday" />
            <label htmlFor="twoday">Two Day</label><br />
            <input type="radio" name="shippings" id="ground" value="ground" />
            <label htmlFor="ground">Ground</label><br />
          </fieldset>
          <br />
          <label htmlFor="favCity">Which is your favourite city?</label>
          <select name="favCity" id="favCity">
            <optgroup label="Indian">

              <option value="1">Delhi</option>
              <option value="2">Bombay</option>
              <option value="3">Dehradun</option>
              <option value="4">Banglore</option>
            </optgroup>
            <optgroup label="Out of India">
              <option value="5">New York</option>
              <option value="6">Amsterdam</option>
            </optgroup>
          </select>

        </form>

        <aside>
          <p>This is text for the aside section. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias iste, rerum excepturi accusantium reprehenderit, repudiandae aspernatur est ducimus deserunt praesentium consequatur impedit, dicta sequi. Natus hic quos quia sequi optio!</p>
        </aside>


      </main>

      <footer>
        <div className="footerlinks">
          <ul>
            <li>Footer Link 1</li>
            <li>Footer Link 2</li>
            <li>Footer Link 3</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
