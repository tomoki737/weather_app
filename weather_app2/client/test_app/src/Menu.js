import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
const MenuComponent = () => {
  const regions = [
    {
      region: "北海道地方",
      prefecture: [
        "宗谷地方",
        "上川・留萌地方",
        "網走・北見・紋別地方",
        "十勝地方",
        "	釧路・根室地方",
        "胆振・日高地方",
        "石狩・空知・後志地方",
        "渡島・檜山地方",
      ],
    },
    {
      region: "東北地方",
      prefecture: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    },
    {
      region: "関東甲信地方",
      prefecture: [
        "	茨城県",
        "栃木県",
        "群馬県",
        "埼玉県",
        "千葉県",
        "東京都",
        "神奈川県",
        "山梨県",
        "長野県",
      ],
    },
    {
      region: "近畿地方",
      prefecture: [
        "滋賀県",
        "京都府",
        "大阪府",
        "兵庫県",
        "奈良県",
        "和歌山県",
      ],
    },
    {
      region: "北陸地方",
      prefecture: ["新潟県", "富山県", "石川県", "福井県"],
    },
    {
      region: "東海地方",
      prefecture: ["岐阜県", "静岡県", "愛知県", "三重県"],
    },
    {
      region: "中国地方",
      prefecture: ["山口", "鳥取県", "島根県", "岡山県", "広島県"],
    },
    {
      region: "九州北部地方",
      prefecture: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県"],
    },
    {
      region: "九州南部・奄美地方",
      prefecture: ["宮崎県", "奄美地方", "鹿児島県（奄美地方除く）"],
    },
    {
      region: "沖縄地方",
      prefecture: ["沖縄本島地方", "大東島地方", "宮古島地方", "八重山地方"],
    },
  ];

  return (
    <div>
      <Menu menuButton={<MenuButton>地域を選択</MenuButton>}>
        {regions.map((data) => {
          return (
            <SubMenu label={data.region}>
              {data.prefecture.map((data) => {
                return <MenuItem>{data}</MenuItem>;
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};
export default MenuComponent;
