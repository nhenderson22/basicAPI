import Colors from 'colors';

export default class Logging {
    public static log = (args: any) => this.info(args);
    public static info = (args: any) => console.log(Colors.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? Colors.underline(args) : args);
    public static warning = (args: any) => console.log(Colors.yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? Colors.underline(args) : args);
    public static error = (args: any) => console.log(Colors.red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? Colors.underline(args) : args);
}
