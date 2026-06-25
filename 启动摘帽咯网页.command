#!/bin/zsh
cd "$(dirname "$0")"

PORT=5173
LOCAL_URL="http://127.0.0.1:${PORT}/index.html"
LAN_IP="$(ipconfig getifaddr en0 2>/dev/null)"

echo "摘帽咯 v0.1 正在启动..."
echo ""
echo "本机浏览器访问："
echo "${LOCAL_URL}"
echo ""

if [ -n "$LAN_IP" ]; then
  echo "手机或同一 Wi-Fi 下其他设备访问："
  echo "http://${LAN_IP}:${PORT}/index.html"
  echo ""
  echo "如果手机打不开，请确认电脑和手机在同一个 Wi-Fi，并允许 macOS 的网络访问提示。"
else
  echo "未识别到 Wi-Fi 局域网 IP。手机访问需要电脑和手机在同一个 Wi-Fi。"
fi

echo ""
echo "保持这个窗口不要关闭；关闭窗口后网页服务会停止。"
echo ""

python3 -m http.server "$PORT" --bind 0.0.0.0
