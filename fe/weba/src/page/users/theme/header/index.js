import { memo } from "react";
import "./style.scss";
import { VscAccount, VscArchive } from "react-icons/vsc";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head">
      <div className="container">
        <div className="left">
          <span>
           thinh@gmail.com
          </span>
          <span>
           application
          </span>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link>
                <VscArchive />
              </Link>
            </li>
            <li>
              <Link to={"profile"}>
                <VscAccount />
              </Link>
              <span>Đăng nhập</span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);
